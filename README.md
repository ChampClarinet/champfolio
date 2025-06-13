# Selen Frontend

### This project is the SELEN for multiple companies

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.tsx`. The page auto-updates as you edit the file.

## Production Build

To run the production server:

```bash
bun run build && bun start
```

Open http://localhost:3000 in your browser to see the result.

## E2E Information

This project corresponding to following deployment URLs

| Server Type                  | Environment | URL                                   |
| ---------------------------- | ----------- | ------------------------------------- |
| Frappe API and Authorization | ALL         | https://voip.synapes-voip-uat-001.net |
| Deployment Frontend          | UAT         | https://voip.0x0xzuow9jw.xyz          |

### OneSignal

For this project, use this app id

| Environment | ID                                   |
| ----------- | ------------------------------------ |
| local       | 9ce8e866-862b-4c82-b35f-bfb9d5401d4c |
| production  | TBA                                  |

### Client IDs

Each environments require individual Frappe's client id as below.

| Server Type         | ID         |
| ------------------- | ---------- |
| local               | 29fcdi13nh |
| server (UAT)        | 29398fvurv |
| server (Production) | TBA        |

## Build to docker image

To build to docker, use `docker-build.sh` to build the docker image

```bash
./docker-build.sh
```

To determine docker tag, type it as argument

```bash
./docker-build.sh thedockerversion
```

**Warning:** Can not use "no-cache" as docker tag name

To build with no cache option, use no-cache option

```bash
./docker-build.sh no-cache
```

To both determine docker tag and no-cache option use version as first argument and no-cache as second option

```bash
./docker-build.sh thedockerversion no-cache
```

### Docker compose way

If you want to build by docker-compose, use `docker-compose-build.sh` instead to build

```bash
./docker-compose-build.sh
```

If you want to pass parameters in `docker-build.sh`, just pass arguments just like use `docker-build.sh`

```bash
./docker-compose-build.sh thedockerversion no-cache
```
