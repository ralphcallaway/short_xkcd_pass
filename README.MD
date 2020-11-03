# XKCD "Short" Passphrase Generator

Passphrases when you have a character limit of 16. Pulls top 10k american short (1-4 character) words from [first20hours google 10000 english repo](https://github.com/first20hours/google-10000-english) and then filters down to just four character words (~1100 last time i ran it). Implies around 40 bits of entropy.

# Usage

`node gen.js`

# Disclaimer

You probably shouldn't use this. I've put no effort into considering it's security.

![Comic](https://imgs.xkcd.com/comics/password_strength.png)
