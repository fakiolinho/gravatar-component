/**
An element providing a wrapper for quick gravatar images.

Examples:

    <gravatar-component email="marios@mist.io" alt-text="Marios Fakiolas"></gravatar-component>

    <gravatar-component email="some@email.com" default-image="http://webcomponents.org/img/icon-customelementsio.png" alt-text="Marios Fakiolas"></gravatar-component>

    <gravatar-component email="marios@mist.io" retina secure></gravatar-component>

    <gravatar-component email="some@email.com" image-set="monsterid"></gravatar-component>

    <gravatar-component hash="64fbed45615b9b322e2f0dbeadfe97a9" size="200"></gravatar-component>

@element gravatar-component
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { LitElement, html } from '@polymer/lit-element'; 
import md5  from 'blueimp-md5-es6/js/md5';

class GravatarComponent extends LitElement {

    static get properties() {
        return {
            // The email address
            email: {
                type: String,
            },
      
            // Hashed Email
            hash: {
                type: String,
            },
      
            // Custom default image as fallback
            defaultImage: {
                type: String,
            },
      
            // Image's alternate text
            altText: {
                type: String,
            },
      
            // Size in pixels, defaults to 80px [ 1 - 2048 ]
            size: {
                type: Number,
            },
      
            // Default imageset to use if not custom defaultImage is provided [ 404 , mm , identicon , monsterid , wavatar ]
            imageSet: {
                type: String,
            },
      
            // Maximum rating (inclusive) [ g , pg , r , x ]
            rating: {
                type: String,
            },
      
            // True for Https and False for Http
            secure: {
                type: Boolean,
            },
      
            // True for retina ready gravatar
            retina: {
                type: Boolean,
            }
        };
    }

    constructor() {
        super();

        this.size = 80;
        this.imageSet = 'mm';
        this.rating = 'g';
        this.secure = false;
        this.retina = false;
    }

    render() {
        return html`
        <style>
            :host {
                display: block;
                box-sizing: border-box;
            }

            img {
                border-radius: var(--gravatar-component-border-radius);

                @apply --gravatar-component-img;
            }
        </style>

        <img src="${this._computeUrl(this.email, this.hash, this.size, this.imageSet, this.rating, this.defaultImage, this.secure, this.retina)}" width="${this.size}" height="${this.size}" alt="${this.altText}">
        `;
    }

    _computeUrl(email, hash, size, imageSet, rating, defaultImage, secure, retina) {
        if (!email && !hash) return null;
        
        var url = [
            secure ? 'https://www.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/',
            hash || md5(email.trim().toLowerCase()),
            '.jpg?s=' + this._retinaReady(size, retina),
            '&d=' + (defaultImage ? encodeURIComponent(defaultImage) : imageSet),
            '&r=' + rating
        ].join('');
  
        return url;
    }

    _retinaReady(size, retina) {
        return retina && window.devicePixelRatio > 1.5 ? 2 * size : size;
    }
}


customElements.define('gravatar-component', GravatarComponent);