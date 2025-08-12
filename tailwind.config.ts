import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				// Fandom Colors
				'stray-kids': {
					red: 'hsl(var(--stray-kids-red))',
					black: 'hsl(var(--stray-kids-black))',
					glow: 'hsl(var(--stray-kids-red-glow))'
				},
				'blackpink': {
					pink: 'hsl(var(--blackpink-pink))',
					black: 'hsl(var(--blackpink-black))',
					glow: 'hsl(var(--blackpink-pink-glow))'
				},
				'demon': {
					dark: 'hsl(var(--demon-dark))',
					red: 'hsl(var(--demon-red))',
					gold: 'hsl(var(--demon-gold))'
				},
				
				// Neon Colors
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					purple: 'hsl(var(--neon-purple))',
					green: 'hsl(var(--neon-green))',
					orange: 'hsl(var(--neon-orange))'
				}
			},
			
			backgroundImage: {
				'gradient-stray-kids': 'var(--gradient-stray-kids)',
				'gradient-blackpink': 'var(--gradient-blackpink)',
				'gradient-demon': 'var(--gradient-demon)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-main': 'var(--gradient-main)'
			},
			
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'poppins': ['Poppins', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-neon': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--neon-cyan) / 0.5)' },
					'50%': { boxShadow: '0 0 25px hsl(var(--neon-cyan) / 0.8)' }
				},
				'glow-rotate': {
					'0%': { transform: 'rotate(0deg)', filter: 'hue-rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)', filter: 'hue-rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'glow-rotate': 'glow-rotate 3s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
