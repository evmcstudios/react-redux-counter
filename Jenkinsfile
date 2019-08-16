pipeline {
    agent { docker { image 'node:8' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        
        stage('clean') {
            
            steps {
              sh 'npm cache clear --force'   
            }
            
        }
        stage('Install') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
    }
}
