pipeline {
    agent none
    tools {
    nodejs 'default-nodejs'
    }
    stages {
        stage('Build') {
            steps {
                script {
                  sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                  sh 'npm run test'
                }
            }
        }

    }
}
