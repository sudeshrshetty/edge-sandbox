#
# Copyright SecureKey Technologies Inc. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

ARG GO_VER
ARG ALPINE_VER

FROM golang:${GO_VER}-alpine${ALPINE_VER} as golang
RUN apk add --no-cache \
	gcc \
	musl-dev \
	git \
	libtool \
	bash \
	make;
ADD . /opt/workspace/edge-sandbox
WORKDIR /opt/workspace/edge-sandbox
ENV EXECUTABLES go git

FROM golang as edge-sandbox
RUN make login-consent-server


FROM alpine:${ALPINE_VER}

# copy build artifacts from build container
COPY --from=edge-sandbox /opt/workspace/edge-sandbox/.build/bin/login-consent /usr/local/bin

# set up nsswitch.conf for Go's "netgo" implementation
# - https://github.com/golang/go/blob/go1.9.1/src/net/conf.go#L194-L275
RUN [ ! -e /etc/nsswitch.conf ] && echo 'hosts: files dns' > /etc/nsswitch.conf

WORKDIR /usr/local/bin
ENTRYPOINT ["server"]
