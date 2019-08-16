pipeline {
    agent { docker { image 'node:8' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
    }
}
