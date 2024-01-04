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
  }
}
