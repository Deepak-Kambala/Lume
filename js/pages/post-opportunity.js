        // Basic form navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const formSteps = document.querySelectorAll('.form-step');
            const nextButtons = document.querySelectorAll('.next-step');
            const prevButtons = document.querySelectorAll('.prev-step');
            
            // Next button functionality
            nextButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const currentStep = this.closest('.form-step');
                    const nextStep = document.querySelector(`.form-step[data-step="${parseInt(currentStep.dataset.step) + 1}"]`);
                    
                    if (nextStep) {
                        currentStep.classList.remove('active');
                        nextStep.classList.add('active');
                        
                        // Update review fields when moving to step 3
                        if (nextStep.dataset.step === "3") {
                            updateReviewFields();
                        }
                    }
                });
            });
            
            // Previous button functionality
            prevButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const currentStep = this.closest('.form-step');
                    const prevStep = document.querySelector(`.form-step[data-step="${parseInt(currentStep.dataset.step) - 1}"]`);
                    
                    if (prevStep) {
                        currentStep.classList.remove('active');
                        prevStep.classList.add('active');
                    }
                });
            });
            
            // Form submission
            document.getElementById('postOpportunityForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Opportunity submitted successfully!');
                // In a real app, you would send data to server here
            });
            
            // Function to update review fields
            function updateReviewFields() {
                // Basic Information
                document.getElementById('review-title').textContent = document.getElementById('opportunityTitle').value;
                document.getElementById('review-type').textContent = document.getElementById('opportunityType').options[document.getElementById('opportunityType').selectedIndex].text;
                document.getElementById('review-positions').textContent = document.getElementById('positionCount').value || '1';
                
                // Institution Details
                document.getElementById('review-institution').textContent = document.getElementById('institutionName').value;
                document.getElementById('review-department').textContent = document.getElementById('department').value || 'Not specified';
                
                // Research Area
                const researchAreas = Array.from(document.getElementById('researchAreas').selectedOptions)
                    .map(option => option.text).join(', ');
                document.getElementById('review-areas').textContent = researchAreas || 'Not specified';
                
                // Position Details
                document.getElementById('review-start-date').textContent = document.getElementById('startDate').value || 'Not specified';
                document.getElementById('review-duration').textContent = document.getElementById('duration').value || 'Not specified';
                document.getElementById('review-deadline').textContent = document.getElementById('applicationDeadline').value || 'Not specified';
                document.getElementById('review-location').textContent = document.getElementById('isRemote').value === 'remote' ? 'Remote' : 
                    (document.getElementById('location').value || 'Not specified');
                
                // Compensation
                const stipend = document.getElementById('stipendAmount').value;
                document.getElementById('review-stipend').textContent = stipend ? '₹' + stipend + ' per month' : 'Not specified';
                
                // Requirements
                document.getElementById('review-description').textContent = document.getElementById('positionDescription').value || 'Not provided';
                document.getElementById('review-education').textContent = document.getElementById('educationLevel').options[document.getElementById('educationLevel').selectedIndex].text || 'Not specified';
                document.getElementById('review-skills').textContent = document.getElementById('skillsRequired').value || 'Not specified';
            }
        });
