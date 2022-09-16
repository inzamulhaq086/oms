let customBtn = document.querySelector('#custom-btn')
            let defaultBtn = document.querySelector('#default-btn')
            let cancelBtn = document.querySelector('#cancel-btn')
            let uploadImage = document.querySelector('.uploadImage')
            customBtn.addEventListener('click',()=>{
                defaultBtn.click()
            })

            defaultBtn.addEventListener('change',function(){
                uploadImage.classList.remove('hidden')
                uploadImage.nextElementSibling.classList.add('hidden')
                const file = this.files[0];
                let validFile = ['image/jpeg','image/jpg','image/png','image/svg']
                if(file && validFile.includes(file.type)){
                    const reader = new FileReader()
                    reader.onload = function(){
                        const result = reader.result
                        uploadImage.src = result
                    }
                    reader.readAsDataURL(file)
                }
                cancelBtn.addEventListener('click',()=>{
                    uploadImage.classList.add('hidden')
                    uploadImage.nextElementSibling.classList.remove('hidden')
                    uploadImage.src = ""
                })
            })