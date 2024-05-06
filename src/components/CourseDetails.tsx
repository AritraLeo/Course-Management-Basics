

const CourseDetails = ({  course }: { course: Course  }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: '20px'
    }}>
      <h2 style={{
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px'
      }}>{course.name}</h2>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '100%',
        maxWidth: '800px'
      }}>
        <p style={{
          color: '#666',
          marginBottom: '10px'
        }}>Instructor: <span style={{
          color: '#007bff',
          fontWeight: 'bold'
        }}>{course.instructor}</span></p>
        <p style={{
          color: '#333',
          lineHeight: '1.5',
          marginBottom: '20px'
        }}>{course.thumbnail}</p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: '20px'
        }}>
          <div style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            marginBottom: '10px'
          }}>
            <p style={{
              margin: '0',
              fontWeight: 'bold'
            }}>Duration: {course.dueDate} </p>
          </div>
          <div style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            marginBottom: '10px'
          }}>
            <p style={{
              margin: '0',
              fontWeight: 'bold'
            }}>Progress: {course.progress}/100</p>
          </div>
          <div style={{
            backgroundColor: '#ffc107',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '5px',
            marginBottom: '10px'
          }}>
            <p style={{
              margin: '0',
              fontWeight: 'bold'
            }}>Completed: {course.completed ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CourseDetails;
