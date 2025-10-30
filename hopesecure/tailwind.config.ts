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
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// HopeSecure Logo Theme Colors
				'hs-blue': 'hsl(var(--security-blue))',
				'hs-blue-dark': 'hsl(var(--security-blue-dark))',
				'hs-blue-light': 'hsl(var(--security-blue-light))',
				'hs-purple': 'hsl(var(--security-purple))',
				'hs-gradient-start': 'hsl(var(--security-gradient-start))',
				'hs-gradient-end': 'hsl(var(--security-gradient-end))',
				'security-blue': 'hsl(var(--security-blue))',
				'security-blue-light': 'hsl(var(--security-blue-light))',
				'security-green': 'hsl(var(--security-green))',
				'security-dark': 'hsl(var(--security-dark))',
				'hero-bg': 'hsl(var(--hero-bg))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-card': 'var(--gradient-card)',
				'hs-gradient': 'linear-gradient(135deg, hsl(var(--security-blue)), hsl(var(--security-purple)))',
				'hs-gradient-soft': 'linear-gradient(135deg, hsl(var(--security-blue-light)), hsl(var(--hero-bg)))'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'hs-glow': '0 0 30px hsl(var(--security-blue) / 0.3)',
				'hs-card': '0 8px 32px hsl(var(--security-blue) / 0.12)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
