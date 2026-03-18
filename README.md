# ⚗️ TheOldOne — Migration Fullstack

> Projet étudiant · Migration Express/Vue.js → Django/React · Déploiement CI/CD via GitHub Actions
---

## 📖 Présentation

**TheOldOne** est un projet réalisé en binôme sur 3 jours dans le cadre d'une formation fullstack. L'objectif principal était de **migrer une application existante** développée avec Express.js et Vue.js vers une stack moderne Django + React, et d'y intégrer un pipeline de **déploiement continu** via GitHub Actions.

---

## 🗂️ Structure du projet

```
TheOldOne-DU-Fullstack/
├── backend/          # API Django (Python)
│   ├── manage.py
│   ├── requirements.txt
│   └── ...
├── frontend/         # Application React + MUI
│   ├── src/
│   ├── package.json
│   └── ...
├── .github/
│   └── workflows/    # Pipelines CI/CD
└── README.md
```

---

## 🛠️ Stack technique

### Avant la migration

| Couche    | Technologie     |
|-----------|-----------------|
| Backend   | Node.js / Express.js |
| Frontend  | Vue.js          |

### Après migration ✅

| Couche    | Technologie     |
|-----------|-----------------|
| Backend   | Python / Django REST Framework |
| Frontend  | React 18 + Material UI (MUI v7) |
| Styles    | Emotion (CSS-in-JS) |
| CI/CD     | GitHub Actions  |

---

## 🚀 Installation & lancement

### Prérequis

- Python 3.12+
- Node.js 18+
- pip & npm

### Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows : venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

L'API est accessible sur `http://localhost:8000`.

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

L'application est accessible sur `http://localhost:3000`.

---

## 🔄 CI/CD — GitHub Actions

Le projet intègre un pipeline CI/CD déclenché à chaque push sur la branche `main`.

Le workflow automatise :
- l'installation des dépendances backend et frontend
- l'exécution des tests
- le déploiement de l'application

Le fichier de configuration se trouve dans `.github/workflows/`.

---

## 👥 Équipe

Projet réalisé en binôme dans le cadre d'un DU Fullstack — 3 jours de développement intensif.

| Membre | GitHub |
|--------|--------|
| cbo31  | [@cbo31](https://github.com/cbo31) |
| Uflob  | [@uflob](https://github.com/Uflob)|

---

## 📝 Licence

Ce projet est réalisé dans un cadre académique. Tous droits réservés aux auteurs.
