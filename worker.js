var Queue = require('bull');


var emailQueue = new Queue('email transcoding' ,'redis://127.0.0.1:6379')


emailQueue.process(function(job, done){

    // job.data contains the custom data passed when the job was created
    // job.id contains id of this job.
  
    // transcode video asynchronously and report progress
    job.progress(42);
  
    console.log('Email sent to',job.data)
    // call done when finished
    done();
  
    // or give a error if error
  //   done(new Error('error transcoding'));
  
    // or pass it a result
  //   done(null, { framerate: 29.5 /* etc... */ });
  
    // If the job throws an unhandled exception it is also handled correctly
  //   throw new Error('some unexpected error');
  })
emailQueue.add([{email: 'zanelezanzizo@gmail.com'},{email: 'zanele@uber5.com'},{email: 'zanelezan@gmail.com'}]);