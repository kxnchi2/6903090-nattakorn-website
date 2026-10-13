tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "secondary-fixed": "#cce5ff", "error": "#ffb4ab", "on-tertiary-container": "#340080", "tertiary-container": "#a078ff", "error-container": "#93000a", "on-tertiary-fixed-variant": "#5516be", "tertiary": "#d0bcff", "surface-container-highest": "#33343b", "secondary-fixed-dim": "#91cdff", "surface-tint": "#ffb2b9", "on-tertiary": "#3c0091", "on-secondary-fixed-variant": "#004b72", "surface-container-lowest": "#0c0e14", "text-muted": "#94A3B8", "tertiary-fixed": "#e9ddff", "outline": "#aa888b", "glow-cyan": "#38BDF8", "primary": "#ffb2b9", "on-secondary": "#003350", "secondary": "#91cdff", "on-primary": "#67001f", "background": "#111319", "surface-dark": "#161922", "on-primary-container": "#5b001a", "border-subtle": "#2B3144", "text-primary": "#F5F5F5", "on-surface-variant": "#e3bdc0", "primary-fixed-dim": "#ffb2b9", "secondary-container": "#3898d7", "surface-dim": "#111319", "on-error-container": "#ffdad6", "on-error": "#690005", "on-secondary-container": "#002c46", "inverse-primary": "#bc0b42", "surface-bright": "#373940", "surface-variant": "#33343b", "outline-variant": "#5a4042", "on-tertiary-fixed": "#23005c", "inverse-surface": "#e2e2eb", "tertiary-fixed-dim": "#d0bcff", "surface-card": "#1E2230", "surface": "#111319", "surface-container-low": "#191b22", "on-primary-fixed": "#400010", "on-primary-fixed-variant": "#91002f", "on-secondary-fixed": "#001e31", "surface-container-high": "#282a30", "primary-fixed": "#ffd9dc", "primary-container": "#ff4f72", "on-background": "#e2e2eb", "inverse-on-surface": "#2e3037", "on-surface": "#e2e2eb", "surface-container": "#1e1f26"
        },
        borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
        spacing: { "space-md": "1rem", "margin": "2rem", "space-xs": "0.25rem", "margin-mobile": "1rem", "space-lg": "1.5rem", "space-xl": "2.5rem", "gutter": "1.5rem", "gutter-mobile": "1rem", "space-sm": "0.5rem" },
        fontFamily: {
          "body-lg": ["Inter"], "display-hero": ["Space Grotesk"], "body-md": ["Inter"], "display-hero-mobile": ["Space Grotesk"], "label-mono-lg": ["JetBrains Mono"], "label-mono-sm": ["JetBrains Mono"], "headline-lg-mobile": ["Space Grotesk"], "headline-lg": ["Space Grotesk"], "headline-sm": ["Space Grotesk"], "headline-md": ["Space Grotesk"], "body-sm": ["Inter"]
        },
        fontSize: {
          "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
          "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "700" }],
          "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
          "display-hero-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
          "label-mono-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
          "label-mono-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
          "headline-lg-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "600" }],
          "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
          "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "500" }],
          "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
          "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }]
        }
      }
    }
  };