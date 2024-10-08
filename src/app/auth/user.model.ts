export class User {
    constructor(
      public id: string,
      public email: string,
      private _token: string,
      private _tokenExpirationDate: Date,
      public role: string
    ) {}
  
    get token() {
      if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        return null;
      }
      return this._token;
    }
  
    get tokenExpirationDate() {
      return this._tokenExpirationDate;
    }
  
    getToken() {
      return this.token;
    }
  }
  