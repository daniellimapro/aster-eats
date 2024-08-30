# Aster Eats

Aster Eats é um app de delivery de comida inspirado no universo dos personagens Asterix e Obelix. Como já temos o famoso Uber Eats, criamos o Aster Eats como um divertido easter egg, trazendo um toque de magia e humor para sua experiência gastronômica!

![Aster Eats](https://github.com/daniellimapro/aster-eats/blob/main/assets/images/mock3.jpg?raw=true)

![Aster Eats](https://github.com/daniellimapro/aster-eats/blob/main/assets/images/mock1.jpg?raw=true)

### 🚀 Início Rápido

Para começar a desenvolver com o Aster Eats, siga estes passos:

#### Clone o Repositório

```bash
git clone https://github.com/daniellimapro/aster-eats.git
cd aster-eats
```

Instale as Dependências

```bash
npm install
```

Inicie o Servidor de Desenvolvimento

```bash
npm start
```

#### Execute o App no Android

```bash
npm run android
```

```bash
npm run ios
```

#### Execute o App na Web

```bash
npm run web
```

#### Rodar os Testes

```bash
npm test
```

### 📦 Dependências

#### Principais Dependências

- @expo/vector-icons - Icones para o React Native.
- @react-native-async-storage/async-storage - Armazenamento assíncrono para React Native.
- @react-navigation/native - Navegação em React Native.
- axios - Cliente HTTP baseado em Promises.
- native-base - Biblioteca de UI para React Native.
- Dependências de Desenvolvimento
- jest - Framework de testes.
- @testing-library/react-native - Testes de componentes React Native.
  🧪 Testes

### Para rodar os testes, use o comando:

```bash
npm test
```

Os testes são configurados para utilizar o `jest` e o `jest-expo.`

### 📝 Scripts

- start: Inicia o servidor de desenvolvimento.
- android: Executa o app no Android.
- ios: Executa o app no iOS.
- web: Executa o app na Web.
- test: Executa os testes.

### 🔧 Configuração

#### Jest Config

A configuração do Jest pode ser encontrada em jest.config.js e está configurada para coletar cobertura dos arquivos de componentes.

```json
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "/node_modules/(?!native-base)/"
  ],
  "coverageDirectory": "./coverage",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "components/**/*.{js,jsx,ts,tsx}",
    "!components/**/*.d.ts"
  ]
}
```

### 💡 Contribuindo

#### Se você deseja contribuir para o Aster Eats, sinta-se à vontade para fazer um fork do repositório e enviar um pull request. Para sugestões e feedback, abra uma issue!
