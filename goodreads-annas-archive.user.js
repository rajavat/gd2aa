// ==UserScript==
// @name         Goodreads → Anna's Archive Search
// @namespace    https://github.com/rajavat/gd2aa
// @version      1.2.0
// @author       v3dika
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iNSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iOSIgeT0iMiIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjExIiB5PSIyIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZWMyYTQ4Ii8+PHJlY3QgeD0iMTIiIHk9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxIiB5PSIzIiB3aWR0aD0iNiIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iNyIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2Q5OWE4MCIvPjxyZWN0IHg9IjgiIHk9IjMiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxMSIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2VjMmE0OCIvPjxyZWN0IHg9IjEyIiB5PSIzIiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iMSIgeT0iNCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNiODZjNTgiLz48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iNSIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iI2I4NmM1OCIvPjxyZWN0IHg9IjciIHk9IjQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkOTlhODAiLz48cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iOSIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iI2I4NmM1OCIvPjxyZWN0IHg9IjExIiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZWMyYTQ4Ii8+PHJlY3QgeD0iMTIiIHk9IjQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxMyIgeT0iNCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2I4NmM1OCIvPjxyZWN0IHg9IjE0IiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iMSIgeT0iNSIgd2lkdGg9IjYiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjciIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkOTlhODAiLz48cmVjdCB4PSI4IiB5PSI1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlYzJhNDgiLz48cmVjdCB4PSIxMiIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjEiIHk9IjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjYjg2YzU4Ii8+PHJlY3QgeD0iMyIgeT0iNiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjQiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNiODZjNTgiLz48cmVjdCB4PSI2IiB5PSI2IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iNyIgeT0iNiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2Q5OWE4MCIvPjxyZWN0IHg9IjgiIHk9IjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSI5IiB5PSI2IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjYjg2YzU4Ii8+PHJlY3QgeD0iMTAiIHk9IjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxMSIgeT0iNiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2VjMmE0OCIvPjxyZWN0IHg9IjEyIiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSIjYjg2YzU4Ii8+PHJlY3QgeD0iMTQiIHk9IjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxIiB5PSI3IiB3aWR0aD0iNiIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iNyIgeT0iNyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2Q5OWE4MCIvPjxyZWN0IHg9IjgiIHk9IjciIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxMSIgeT0iNyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2VjMmE0OCIvPjxyZWN0IHg9IjEyIiB5PSI3IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iMSIgeT0iOCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjIiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNiODZjNTgiLz48cmVjdCB4PSI0IiB5PSI4IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iNSIgeT0iOCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2I4NmM1OCIvPjxyZWN0IHg9IjYiIHk9IjgiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSI3IiB5PSI4IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZDk5YTgwIi8+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNiODZjNTgiLz48cmVjdCB4PSIxMSIgeT0iOCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2VjMmE0OCIvPjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBiZmE0Ii8+PHJlY3QgeD0iMTMiIHk9IjgiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNiODZjNTgiLz48cmVjdCB4PSIxNCIgeT0iOCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjEiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSI3IiB5PSI5IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZDk5YTgwIi8+PHJlY3QgeD0iOCIgeT0iOSIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjExIiB5PSI5IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZWMyYTQ4Ii8+PHJlY3QgeD0iMTIiIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxIiB5PSIxMCIgd2lkdGg9IjYiIGhlaWdodD0iMSIgZmlsbD0iI2YwYmZhNCIvPjxyZWN0IHg9IjciIHk9IjEwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZDk5YTgwIi8+PHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxMSIgeT0iMTAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNhODE4MmUiLz48cmVjdCB4PSIxMiIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGJmYTQiLz48cmVjdCB4PSIxIiB5PSIxMSIgd2lkdGg9IjYiIGhlaWdodD0iMSIgZmlsbD0iI2U4YTg2MCIvPjxyZWN0IHg9IjciIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZDk5YTgwIi8+PHJlY3QgeD0iOCIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNlOGE4NjAiLz48cmVjdCB4PSIxMSIgeT0iMTEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNhODE4MmUiLz48cmVjdCB4PSIxMiIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNlOGE4NjAiLz48cmVjdCB4PSIwIiB5PSIxMiIgd2lkdGg9IjciIGhlaWdodD0iMSIgZmlsbD0iI2M4MjQzYSIvPjxyZWN0IHg9IjciIHk9IjEyIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZThhODYwIi8+PHJlY3QgeD0iOCIgeT0iMTIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiIGZpbGw9IiNjODI0M2EiLz48cmVjdCB4PSIwIiB5PSIxMyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEiIGZpbGw9IiM4ZTE0MjYiLz48cmVjdCB4PSI2IiB5PSIxNCIgd2lkdGg9IjQiIGhlaWdodD0iMSIgZmlsbD0iIzhlMTQyNiIvPjwvc3ZnPg==
// @description  Adds a button to Goodreads book pages that searches for the title on Anna's Archive.
// @match        https://www.goodreads.com/book/show/*
// @match        https://goodreads.com/book/show/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  // Anna's Archive changes domains often. change the default here, or use
  // the Tampermonkey menu ("Set Anna's Archive domain") to update it.
  const DEFAULT_DOMAIN = 'annas-archive.gl';
  const INCLUDE_AUTHOR = true; // set to false to search by title only
  const BUTTON_ID = 'aa-search-button';

  const getDomain = () => GM_getValue('aaDomain', DEFAULT_DOMAIN);

  GM_registerMenuCommand("Set Anna's Archive domain", () => {
    const current = getDomain();
    const input = prompt("Anna's Archive domain (e.g. annas-archive.gl):", current);
    if (input && input.trim()) {
      const clean = input.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      GM_setValue('aaDomain', clean);
      document.getElementById(BUTTON_ID)?.remove();
      addButton();
    }
  });

  function text(sel) {
    const el = document.querySelector(sel);
    return el ? el.textContent.trim() : '';
  }

  function getTitle() {
    let title =
      text('h1[data-testid="bookTitle"]') || // current layout
      text('#bookTitle') ||                   // legacy layout
      (document.querySelector('meta[property="og:title"]')?.content || '').trim();
    // drop series info like "(Harry Potter, #1)" and subtitles after a colon
    return title.replace(/\s*\([^)]*#\d+[^)]*\)\s*$/, '').split(':')[0].trim();
  }

  function getAuthor() {
    return (
      text('.ContributorLinksList span[data-testid="name"]') ||
      text('span.ContributorLink__name') ||
      text('a.authorName span[itemprop="name"]') ||
      ''
    );
  }

  function buildUrl() {
    const title = getTitle();
    const author = INCLUDE_AUTHOR ? getAuthor() : '';
    const query = [title, author].filter(Boolean).join(' ');
    return `https://${getDomain()}/search?q=${encodeURIComponent(query)}`;
  }

  function makeButton() {
    const a = document.createElement('a');
    a.id = BUTTON_ID;
    a.textContent = "Search on Anna's Archive";
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.href = buildUrl();
    // Refresh the URL on click in case the page content changed
    a.addEventListener('mousedown', () => { a.href = buildUrl(); });
    Object.assign(a.style, {
      display: 'block',
      boxSizing: 'border-box',
      width: '100%',
      marginTop: '8px',
      padding: '8px 16px',
      borderRadius: '24px',
      background: '#1f6f50',
      color: '#fff',
      fontWeight: '600',
      fontSize: '14px',
      textAlign: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
    });
    a.addEventListener('mouseenter', () => (a.style.background = '#174f39'));
    a.addEventListener('mouseleave', () => (a.style.background = '#1f6f50'));
    return a;
  }

  function addButton() {
    if (document.getElementById(BUTTON_ID) || !getTitle()) return false;

    const anchor =
      document.querySelector('.BookActions') ||          // current layout (under "Want to Read")
      document.querySelector('.BookPage__leftColumn') ||
      document.querySelector('#imagecol') ||             // legacy layout
      document.querySelector('h1[data-testid="bookTitle"]')?.parentElement;

    if (!anchor) return false;
    anchor.appendChild(makeButton());
    return true;
  }

  // goodreads renders with React, so wait for elements and re-add after navigation.
  addButton();
  const observer = new MutationObserver(() => {
    if (!document.getElementById(BUTTON_ID)) addButton();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
