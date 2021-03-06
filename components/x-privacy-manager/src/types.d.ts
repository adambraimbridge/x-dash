type CategoryPayload = {
  onsite: {
    status: boolean;
    lbi: boolean;
    source: string;
    fow: string;
  };
};

type CCPAConsentData = Record<
  'behaviouralAds' | 'demographicAds' | 'programmaticAds',
  CategoryPayload
>;

type CCPAConsentPayload = {
  formOfWordsId: string;
  consentSource: string;
  data: CCPAConsentData;
};

type OnSaveCallback = (
  err: null | Error,
  data: { consent: boolean; payload: CCPAConsentPayload }
) => void;

type Actions = {
  onConsentChange: () => void;
  sendConsent: (
    consentApiUrl: string,
    onConsentSavedCallbacks: OnSaveCallback[],
    consentSource: string
  ) => Promise<{ _response: _Response }>;
};

type _Response = {
  ok: boolean;
  status?: number;
};

type ConsentProxyEndpoint = Record<'core' | 'enhanced' | 'createOrUpdateRecord', string>;

type ConsentProxyEndpoints = { [key in keyof ConsentProxyEndpoint]: string };

type PrivacyManagerProps = {
  userId: string | undefined;
  consent?: boolean;
  referrer?: string;
  cookieDomain?: string;
  legislation?: string[];
  consentSource: string;
  consentProxyEndpoints: ConsentProxyEndpoints;
  onConsentSavedCallbacks?: OnSaveCallback[];
};

type BasePrivacyManagerProps = PrivacyManagerProps & {
  actions: Actions;
  isLoading?: boolean;
  _response: _Response;
};
