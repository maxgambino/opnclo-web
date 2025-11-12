# 📸 Instructions pour ajouter les images

## Images à placer dans le dossier `public/`

Placez les images suivantes dans le dossier `public/` de votre projet :

### 1. Hero Section
- **`mobile-checklist.png`** - Image de la personne tenant un smartphone avec notification de checklist
  - Taille recommandée : ~256px de largeur
  - Format : PNG avec transparence si possible

- **`dashboard-mockup.png`** - Mockup du dashboard principal
  - Taille recommandée : ~800px de largeur
  - Format : PNG

### 2. Feature Sections
- **`efficiency-feature.png`** - Image pour la section "Redefine efficiency"
  - Taille recommandée : ~600px de largeur
  - Format : PNG

- **`accuracy-feature.png`** - Image pour la section "Improve accuracy"
  - Taille recommandée : ~600px de largeur
  - Format : PNG

- **`collaboration-feature.png`** - Image pour la section "Achieve better team collaboration"
  - Taille recommandée : ~600px de largeur
  - Format : PNG

## Structure des fichiers

```
opnclo-web/
├── public/
│   ├── mobile-checklist.png      ← Image smartphone avec checklist
│   ├── dashboard-mockup.png       ← Mockup dashboard
│   ├── efficiency-feature.png    ← Image section efficiency
│   ├── accuracy-feature.png      ← Image section accuracy
│   └── collaboration-feature.png ← Image section collaboration
```

## Notes

- Les images sont référencées avec `/nom-image.png` dans le code
- Si une image n'existe pas, un placeholder avec icône s'affichera automatiquement
- Assurez-vous que les images sont optimisées pour le web (compression PNG/WebP)
- Les images doivent avoir un fond transparent ou un fond qui s'harmonise avec le design

## Optimisation recommandée

Pour de meilleures performances, vous pouvez :
1. Utiliser WebP au lieu de PNG (meilleure compression)
2. Créer des versions @2x pour les écrans Retina
3. Utiliser Next.js Image component pour l'optimisation automatique

