# HolUpIntermediary

A REST application proxy for p2p payment gateways.  It uses the the PayPal payout API for executing transactions.

# Build & Publish Docker Image

$ docker build . -t hol-up-intermediary-80
$ docker tag hol-up-intermediary-80 joaker/hol-up-intermediary-80
$ docker push joaker/hol-up-intermediary-80

# TODO
- Convert payout route from GET to POST
- Create geo reporting endpoint

