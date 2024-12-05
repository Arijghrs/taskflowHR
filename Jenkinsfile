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
                    bat 'docker exec backend npm test'
                }
            }
        }

        stage('Teardown') {
            steps {
                script {
                    bat 'docker-compose down'
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
