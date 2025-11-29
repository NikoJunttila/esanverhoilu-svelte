import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial theme from localStorage or default to 'dark'
const initialTheme = browser
    ? localStorage.getItem('theme') || 'dark'
    : 'dark';

export const theme = writable(initialTheme);

// Subscribe to theme changes and update localStorage + document class
if (browser) {
    theme.subscribe(value => {
        localStorage.setItem('theme', value);
        if (value === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    });
}

export function toggleTheme() {
    theme.update(current => current === 'dark' ? 'light' : 'dark');
}
