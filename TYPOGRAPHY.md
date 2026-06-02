# Meenu Makeover Typography System (v3)

## Centralized Tokens
The typography system uses a unified 1.250 (Major Third) scale across two main font families:
- **Cormorant Garamond**: Elegant serif for display and headings.
- **Inter**: Clean, legible sans-serif for body, utility, and labels.

### Usage in Code
The system is built via `src/lib/typography.ts` mapping and semantic React components in `src/components/ui/Typography.tsx`.

```tsx
import { Display, H2, H3, H4, BodyLg, Body, Eyebrow, Highlight } from "@/components/ui/Typography";

function Example() {
  return (
    <div>
      <Eyebrow>Sub-label</Eyebrow>
      <H2>Title with <Highlight>Italic</Highlight></H2>
      <BodyLg>Leading paragraph...</BodyLg>
      <Body>Secondary description.</Body>
    </div>
  );
}
```

### Scale Reference
- `Display` (`displayXl`): Hero headline (48px → 96px)
- `H1` / `H2` (`headingXl`): Major Section Headings (36px → 64px)
- `H3` (`headingLg`): Sub-section Headings (28px → 44px)
- `H4` (`headingMd`): Card Titles (22px → 28px)
- `Eyebrow` (`eyebrow`): Overline labels (12px uppercase)
- `BodyLg` (`bodyLg`): Lead Intro Paragraphs (18px → 20px)
- `Body` (`body`): Default Paragraphs (16px → 17px)
- `Highlight`: Emphasis wrapping `<em>` targeting gold italic.
