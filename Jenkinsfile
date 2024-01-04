pipeline{
  agent any
  stages{
    stage("checkout"){
      steps{
        checkout scm
      }
    }

    stage("Test"){
      steps{
        sh 'npm install'
       
      }
    }
    
     stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage("Build image"){
      steps{
        sh 'docker build -t my-node-app:1.0 .'
      }
    }

stage("Docker push") {
    steps {
        script {
            withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                sh 'docker tag my-node-app:1.0 peter167/my-node-app:1.0'
                try {
                    sh 'docker push peter167/my-node-app:1.0'
                } catch (err) {
                    echo "Failed to push Docker image: ${err}"
                } finally {
                    sh 'docker logout'
                }
            }
        }
    }
}

  }
}
