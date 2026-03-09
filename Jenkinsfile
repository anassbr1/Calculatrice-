pipeline {
  agent any

  tools {
    nodejs 'NodeJS'   // ← doit correspondre au nom configuré dans Jenkins Tools
  }

  stages {

    stage('Checkout') {
      steps {
        echo 'Récupération du code depuis GitHub...'
        checkout scm
      }
    }

    stage('Install') {
      steps {
        echo 'Installation des dépendances...'
        sh 'npm install'   // Sur Windows remplacer par : bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Lancement des tests...'
        sh 'npm test'      // Sur Windows : bat 'npm test'
      }
    }

    stage('Build') {
      steps {
        echo 'Build de l\'application...'
        sh 'node -e "console.log(\"Build OK\")"'
      }
    }

  }

  post {
    success {
      echo 'Bravo, déploiement réussi !'
    }
    failure {
      echo 'Echec du pipeline, vérifier les logs.'
    }
  }
}