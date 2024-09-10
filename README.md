# Ejercicio - Mérida 1 - Set up ambiente de desarrollo

Este repositorio es un ejercicio sencillo diseñado para los participantes del hackathon de ETH Mexico, con el fin de mostrar cómo preparar un ambiente de desarrollo en Ethereum utilizando Hard Hat.

## Instrucciones

### 1. Crear un nuevo proyecto de Hardhat

```bash
mkdir merida-1-set-up

cd merida-1-set-up
```

Inicializar el proyecto:

```bash
yarn init
```

Instalar Hardhat como dependencia de desarrollo:

```bash
yarn add --dev hardhat
```

Inicializar Hardhat:

```bash
yarn hardhat init
```

Para clonar el código se puede utilizar el siguiente comando.

```bash
git clone git@github.com:josemariasosa/merida-1-set-up.git
```

### 2. Instalar las dependencias necesarias

Una vez que tengan el proyecto de Hardhat configurado, deberán instalar los siguientes paquetes:

Instalar los contratos de OpenZeppelin:

```bash
yarn add @openzeppelin/contracts
```

### 3. Las pruebas predeterminadas deben de correr exitosamente

Una vez hecha la instalación, no debe de haber problema para correr con éxito las pruebas predeterminadas.

Comando para correr las pruebas de Hardhat.

```bash
yarn hardhat test
```

## Objetivo del Ejercicio

Vamos a desplegar 2 contratos:

- WETH
- Staking Liquido
