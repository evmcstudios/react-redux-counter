pipeline {
    agent { sudo docker { image 'node:8' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
