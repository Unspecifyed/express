// app_admin/scr/app/storage.spec.ts
import { TestBed } from '@angular/core/testing';
import { BROWSER_STORAGE, AppStorage } from '../services/storage';

describe('BROWSER_STORAGE', () => {
  it('should be created', () => {
    const token = TestBed.inject(BROWSER_STORAGE);
    expect(token).toBe(localStorage);
  });
});

describe('AppStorage', () => {
  let storage: AppStorage;

  beforeEach(() => {
    storage = new AppStorage(localStorage);
  });

  it('should create an instance', () => {
    expect(storage).toBeTruthy();
  });

  it('should set and get an item', () => {
    storage.setItem('testKey', 'testValue');
    expect(storage.getItem('testKey')).toBe('testValue');
  });

  it('should remove an item', () => {
    storage.setItem('testKey', 'testValue');
    storage.removeItem('testKey');
    expect(storage.getItem('testKey')).toBeNull();
  });

  it('should clear all items', () => {
    storage.setItem('testKey1', 'testValue1');
    storage.setItem('testKey2', 'testValue2');
    storage.clear();
    expect(storage.getItem('testKey1')).toBeNull();
    expect(storage.getItem('testKey2')).toBeNull();
  });
});
