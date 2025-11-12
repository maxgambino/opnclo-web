# 🖼️ Optimisation de l'image mobile-checklist.png

## Problème actuel

L'image `mobile-checklist.png` fait **1.4 MB**, ce qui est trop lourd pour le web et peut causer des problèmes de déploiement sur Vercel.

## Solutions

### Option 1 : Optimiser l'image (Recommandé)

1. **Utiliser un outil en ligne** :
   - https://tinypng.com/ (compression PNG)
   - https://squoosh.app/ (compression avancée)
   - https://imagecompressor.com/

2. **Objectif** : Réduire à moins de 200-300 KB

3. **Après optimisation** :
   - Remplacer `public/mobile-checklist.png` par la version optimisée
   - Commit et push

### Option 2 : Convertir en WebP

WebP offre une meilleure compression :
- Utiliser https://squoosh.app/ pour convertir PNG → WebP
- Mettre à jour le code pour utiliser `.webp` au lieu de `.png`

### Option 3 : Utiliser un CDN externe

Héberger l'image sur un service externe :
- Cloudinary (gratuit jusqu'à 25 GB)
- Imgur
- GitHub Raw (via le repo)

## Commande pour optimiser localement (si ImageMagick installé)

```bash
magick public/mobile-checklist.png -quality 85 -strip public/mobile-checklist-optimized.png
```

## Vérification

Après optimisation, vérifier :
- Taille du fichier < 300 KB
- Qualité visuelle acceptable
- L'image s'affiche sur https://opnclo.vercel.app/mobile-checklist.png

