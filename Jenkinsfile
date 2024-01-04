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
        withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                sh 'docker tag my-node-app:1.0 peter167/my-node-app:1.0'
                sh 'docker push peter167/my-node-app:1.0'
                sh 'docker logout'
          
        }
    }
}

  }
}
