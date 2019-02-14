﻿import $ from 'jquery';
import initElements from './utils/init-elements.js';
import AnchorLink from '../components/anchor/anchor-link.js';
import Header from '../components/header/header.js';
import Navigation from '../components/navigation/navigation.js';
import Form from '../components/form/form.js';
import Hero from '../components/hero/hero.js';

export default class FaseApplication {
    constructor() {
        $(document).ready(() => this.init());
        $(window).on('load', () => this.load());
    }

    init() {
        initElements('[data-header]', Header);
        initElements('[data-navigation]', Navigation, {
            isActive: false
        });

        initElements('[data-anchor-link]', AnchorLink);
        initElements('[data-form]', Form);
    }

    load() {
        initElements('[data-hero]', Hero);
    }
}