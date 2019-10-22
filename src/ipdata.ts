import request from 'request-promise';
import urljoin from 'url-join';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IPDataLookupResponse {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  asn: string;
  organisation: string;
  postal: string;
  currency: string;
  currency_symbol: string;
  calling_code: string;
  flag: string;
  time_zone: string;
}

export default function lookup(ip?: string, apiKey?: string, language?: string): Promise<IPDataLookupResponse> {
  let uri = 'https://api.ipdata.co/';
  const headers = {};

  if (ip) {
    uri = urljoin(uri, ip);
  }

  if (language) {
    uri = urljoin(uri, language);
  }

  if (apiKey) {
    uri = urljoin(uri, `?api-key=${apiKey}`);
  }

  return request({
    uri,
    headers,
    json: true,
  });
}
