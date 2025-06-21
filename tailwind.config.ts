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
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
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
				wedding: {
					gold: '#D4AF37',
					'gold-light': '#F7E98E',
					'gold-dark': '#B8860B',
					cream: '#FDF6E3',
					'cream-dark': '#F5E6D3',
					rose: '#F4E4E0',
					'rose-dark': '#E8C5BC',
				},
				lotus: {
					'deep-blue': '#1e3a5f',
					'ocean-blue': '#2c5aa0',
					'sky-blue': '#4a90e2',
					'marble-white': '#f8f9fa',
					'pearl': '#ffffff',
					'gold': '#d4af37',
					'gold-light': '#f4e4a6',
					'gold-accent': '#b8860b',
					'mist': '#e8f4fd',
					'water': '#cde7f0',
				}
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'sparkle': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' }
				},
				'lotus-bloom': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) rotate(-10deg)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.05) rotate(2deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'water-ripple': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				},
				'float-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'gentle-sway': {
					'0%, 100%': {
						transform: 'translateX(0) translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateX(10px) translateY(-5px) rotate(1deg)'
					},
					'75%': {
						transform: 'translateX(-10px) translateY(5px) rotate(-1deg)'
					}
				},
				'water-flow': {
					'0%': {
						background-position: '0% 50%'
					},
					'50%': {
						background-position: '100% 50%'
					},
					'100%': {
						background-position: '0% 50%'
					}
				},
				'magical-shimmer': {
					'0%': { opacity: '0.3', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' },
					'100%': { opacity: '0.3', transform: 'scale(0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'lotus-bloom': 'lotus-bloom 1.5s ease-out',
				'water-ripple': 'water-ripple 2s ease-out infinite',
				'float-up': 'float-up 0.8s ease-out',
				'gentle-sway': 'gentle-sway 6s ease-in-out infinite',
				'water-flow': 'water-flow 8s ease-in-out infinite',
				'magical-shimmer': 'magical-shimmer 3s ease-in-out infinite'
			},
			backgroundImage: {
				'water-gradient': 'linear-gradient(135deg, #e8f4fd 0%, #cde7f0 25%, #4a90e2 100%)',
				'marble-flow': 'linear-gradient(45deg, #f8f9fa 0%, #ffffff 25%, #e8f4fd 50%, #cde7f0 75%, #f8f9fa 100%)',
				'lotus-magic': 'radial-gradient(circle at 30% 40%, #4a90e2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4af37 0%, transparent 50%), radial-gradient(circle at 40% 80%, #2c5aa0 0%, transparent 50%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
