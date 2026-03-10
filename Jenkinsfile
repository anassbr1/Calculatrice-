pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
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
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Lancement des tests...'
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        echo 'Build de application...'
        sh "node --version"
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