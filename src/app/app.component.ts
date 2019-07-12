import {Component} from '@angular/core';
import {Universal} from '@aeternity/aepp-sdk/es/ae/universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ae-angular-fiddle2';

  constructor() {
    Universal({
      url: 'https://sdk-testnet.aepps.com',
      //internalUrl: 'http://localhost:3001/internal/',
      compilerUrl: 'https://compiler.aepps.com',
      nativeMode: true,
      keypair: {
        secretKey: 'bb9f0b01c8c9553cfbaf7ef81a50f977b1326801ebf7294d1c2cbccdedf27476e9bbf604e611b5460a3b3999e9771b6f60417d73ce7c5519e12f7e127a1225ca',
        publicKey: 'ak_2mwRmUeYmfuW93ti9HMSUJzCk1EYcQEfikVSzgo6k2VghsWhgU'
      },
      networkId: 'ae_devnet' // or any other networkId your client should connect to
    }).then(ae => {
      // Interacting with the blockchain client
      // getting the latest block height
      ae.height().then(height => {
        // logs current height
        console.log('Current Block Height:', height);
      }).catch(e => {
        // logs error
        console.log(e);
      });
    }).catch(e => {
      console.log('Shit, it didn\'t work:', e);
    });
  }
}
