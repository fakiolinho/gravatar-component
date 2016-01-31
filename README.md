# gravatar-component

An element providing a wrapper for quick gravatar images / urls.

## How to install

```javascript
bower i gravatar-component -S
```

## Demo
Check [here](http://fakiolinho.github.io/gravatar-component/components/gravatar-component/)

## Usage

1.Simple gravatar image with an alt text:

```javascript
<gravatar-component email="marios@mist.io" alt-text="Marios Fakiolas"></gravatar-component>
```

2.Simple gravatar url with a custom fallback image:

```javascript
<gravatar-component email="some@email.com" is-url default-image="http://webcomponents.org/img/icon-customelementsio.png" alt-text="Marios Fakiolas"></gravatar-component>
```

3.Simple secure gravatar url:

```javascript
<gravatar-component email="marios@mist.io" is-url secure></gravatar-component>
```

4.Simple gravatar image with monsterid images as fallbak

```javascript
<gravatar-component email="some@email.com" image-set="monsterid"></gravatar-component>
```

5.Simple gravatar image using hash

```javascript
<gravatar-component hash="64fbed45615b9b322e2f0dbeadfe97a9" size="200"></gravatar-component>
```

## Options

| Attribute | Type | Default Value | Description |
| --- | --- | --- | --- |
| **altText** | String | null | Image's alternate text |
| **defaultImage** | String | null | Custom default image as fallback |
| **email** | String | null | The email address |
| **hash** | String | null | Hashed Email |
| **imageSet** | String | mm | Default imageset to use if not custom defaultImage is provided [ 404 | mm | identicon | monsterid | wavatar ] |
| **isUrl** | Boolean | false | False to return a complete IMG tag True for just the URL |
| **rating** | String | g | Maximum rating (inclusive) [ g | pg | r | x ] |
| **secure** | Boolean | false | True for Https and False for Http |
| **size** | Number | 80 | Size in pixels, defaults to 80px [ 1 - 2048 ] |

## License

[MIT](http://opensource.org/licenses/MIT) license.
