import { Validator } from '@angular/forms';

export class LocalStorageUtil {
  canUseLocalStorage =
    typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  setItem(key: string, value: any): void {
    if (this.canUseLocalStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  //   getItem<T>(key: string): T | null {
  //     if (this.canUseLocalStorage) {
  //       const data = localStorage.getItem(key);
  //       return data ? JSON.parse(data) : null;
  //     }
  //   }
}
