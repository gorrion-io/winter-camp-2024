import { describe, expect, it } from 'vitest';

import { CREW_MAX_AGE, CREW_MIN_AGE } from '@/config/constants';
import {
  mapJsonMemberToValidCrewMember,
  mapYamlMemberToValidCrewMember,
  validateByAge,
} from '@/lib/utils/crew-mappers';
import {
  INVALID_JSON_MEMBERS_MOCK_DATA,
  INVALID_YAML_MEMBERS_MOCK_DATA,
  JSON_MEMBERS_MOCK_DATA,
  MEMBERS_MOCK_RESULT,
  YAML_MEMBERS_MOCK_DATA,
} from '@/__tests__/mocks/members.mock';


describe('crew-mappers', () => {
  describe('validateByAge', () => {
    it('returns true when age is within the valid range', () => {
      const result = validateByAge({ age: CREW_MIN_AGE + 1 });
      expect(result).toBe(true);
    });

    it('returns false when age is below the valid range', () => {
      const result = validateByAge({ age: CREW_MIN_AGE - 1 });
      expect(result).toBe(false);
    });

    it('returns false when age is above the valid range', () => {
      const result = validateByAge({ age: CREW_MAX_AGE + 1 });
      expect(result).toBe(false);
    });

    it('returns true when age is exactly the minimum valid age', () => {
      const result = validateByAge({ age: CREW_MIN_AGE });
      expect(result).toBe(true);
    });

    it('returns true when age is exactly the maximum valid age', () => {
      const result = validateByAge({ age: CREW_MAX_AGE });
      expect(result).toBe(true);
    });
  });

  describe('mapJsonMemberToValidCrewMember', () => {
    it('returns valid crew members when provided with valid JSON data', () => {
      const result = mapJsonMemberToValidCrewMember(JSON_MEMBERS_MOCK_DATA);
      expect(result).toEqual(MEMBERS_MOCK_RESULT);
    });

    it('filters out invalid crew members when provided with JSON data', () => {
      const result = mapJsonMemberToValidCrewMember(
        INVALID_JSON_MEMBERS_MOCK_DATA,
      );
      expect(result).toEqual(MEMBERS_MOCK_RESULT);
    });
  });

  describe('mapYamlMemberToValidCrewMember', () => {
    it('returns valid crew members when provided with valid YAML data', () => {
      const result = mapYamlMemberToValidCrewMember(YAML_MEMBERS_MOCK_DATA);
      expect(result).toEqual(MEMBERS_MOCK_RESULT);
    });

    it('filters out invalid crew members when provided with YAML data', () => {
      const result = mapYamlMemberToValidCrewMember(
        INVALID_YAML_MEMBERS_MOCK_DATA,
      );
      expect(result).toEqual(MEMBERS_MOCK_RESULT);
    });
  });
});
