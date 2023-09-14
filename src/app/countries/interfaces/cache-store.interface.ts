import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermConutries;
  byCountries: TermConutries;
  byRegion: RegionCountries;
}

export interface TermConutries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
