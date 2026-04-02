# APEX MARKETING — Logo Integration Guide

## Step 1 — Create folder structure

Inside your project root (same level as index.html), create these folders:

  images/
    partners/       ← partner & certification logos
    clients/        ← customer logos

---

## Step 2 — Copy logos into folders

### → images/partners/
Copy these files exactly (keep original filenames):
  Logo-Siemesn.png
  logo_Yaskawa_logo.svg
  Logo_-_EATON.png
  Logo_L_K.jpg
  Logo-_Wago.png
  Logo-C_S.png
  LOGO-_ISO.jpg
  LOGO-CPRI_Logo.jpeg

### → images/clients/
Copy these files exactly (keep original filenames):
  Logo_Tata_Steel.png
  Logo_tata-motors-logo-.jpg
  Logo__JUSCO_--original-imags8rugywhwzsm.webp
  Logo_Jindal_logo_Revised.svg
  Logo_Steel_Authority_of_India_logo.svg
  LOGO_RKFORGE.png
  Logo_RUNGTA-STEEL.jpg
  Logo_SSIL-Logo_Small-Chakra.png
  Logo_ISWP.jpeg
  Logo_Tata_Steel_Long_Prducts.jpeg
  Logo_TINPLATE_NS-64926ec2.png

NOTE: Tata Metalics was provided as an .htm file (not an image).
      You can skip it or replace with a PNG/SVG version if available.

---

## Step 3 — Apply changes to index.html

Open CHANGES_index.html and apply the 3 clearly marked changes:

  CHANGE 1 — Replace the 2 partner cards (Siemens + Yaskawa)
             with the new versions that have real logo images.

  CHANGE 2 — Replace the <div class="grid ... lg:grid-cols-7 gap-3">
             text-chip grid with the new .component-logo-grid
             that shows actual logo images.

  CHANGE 3 — Insert the entire "Trusted Clients" marquee section
             ABOVE the existing GALLERY section comment.

---

## Step 4 — Add CSS to styles.css

Open ADDITIONS_styles.css and paste ALL its contents at the
very bottom of your existing css/styles.css file.

---

## Step 5 — Add Clients to navbar (optional but recommended)

In the desktop nav <ul> and mobile menu, add:
  <li><a class="nav-link" href="#clients">Clients</a></li>

Place it between "Industries" and "Gallery" links.

---

## Notes on logo appearance

  Partner logos  → Shown in full colour on white background cards.
  Client logos   → Shown white/inverted on the dark navy marquee.
                   This creates a clean, consistent premium look.
                   On hover, logos brighten slightly.
  
  The marquee pauses on hover so users can read each logo.
  It loops seamlessly using a duplicated set of logos.
