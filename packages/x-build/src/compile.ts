import {Package, FilePath, OutputType, Host, OutputConfig, Task, Component} from './types';
import * as tasks from './tasks';
import * as fs from 'mz/fs';
import * as path from 'path';
import globby = require('globby');
import readJSON from './read-json';

function assertUnreachable(x: never): never {
	throw new Error(`Unexpected ${x}`);
}

async function getFileList(component: Component, config: OutputConfig): Promise<FilePath[]> {
	switch(config.type) {
		case OutputType.hyperscript:
			return globby(
				path.join(
					component.root,
					'dist/jsx',
					'**/*.js'
				)
			);

		case OutputType.jsx:
			return globby(
				path.join(
					component.root,
					'src',
					'**/*.{ts,tsx}'
				)
			);
	}
}

function getTask(type: OutputType): Task {
	switch(type) {
		case OutputType.jsx:
			return tasks.typescript;
		case OutputType.hyperscript:
			return tasks.babel;
	}
}

function inferConfig(host: Host): OutputConfig[] {
	return [{
		type: OutputType.hyperscript,
		pragma: host.dependencies.includes('react') ? 'React.createElement' : 'h',
	}];
}

async function getOutputConfigs(host?: Host): Promise<OutputConfig[]> {
	if(host == null) {
		return [
			{ type: OutputType.jsx },
		];
	}

	const xBuildPath = path.resolve(host.root, 'x-build.json');

	if(await fs.exists(xBuildPath)) {
		return [await readJSON<OutputConfig>(
			xBuildPath
		)];
	}

	return inferConfig(host);
}

export default async function compile(component: Component, host?: Host): Promise<void> {
	const configs = await getOutputConfigs(host);

	await Promise.all(
		configs.map(async config => {
			console.log({
				component,
				config
			});

			const files = await getFileList(component, config);
			const task = getTask(config.type);

			return task(files, config);
		})
	);
};
