REGISTRY=techotron
VERSION=$(shell git rev-parse --short HEAD)
APP=react-demo:$(VERSION)
LINTER=eslint:react-demo

build:
	docker build -t $(REGISTRY)/$(APP) .
publish: docker-login	docker-push
docker-push:
	docker push $(REGISTRY)/$(APP)
docker-login:
	docker login -u techotron
build-lint:
	docker build -t $(LINTER) -f eslint.Dockerfile .
docker-lint:
	docker run --rm \
		-v $(shell pwd)/.eslintrc.yaml:/data/.eslintrc.yaml \
		-v $(shell pwd)/.eslintignore:/data/.eslintignore \
		-v $(shell pwd)/src:/data/src \
		-v $(shell pwd)/public:/data/public \
		eslint:react-demo \
			--ext .tsx,.ts \
			/data/src
lint: build-lint docker-lint
