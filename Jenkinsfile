pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Arijghrs/taskflowHR.git'
            }
        }

        

        stage('Run Backend Tests') {
            steps {
                script {
                    sh 'docker exec backend npm test'
                }
            }
        }

        stage('Teardown') {
            steps {
                script {
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed."
        }
    }
}

