// handleNameClick = () => {
    //     const cryptocurrencies = [...this.state.cryptocurrencies]
    //     function dynamicSort(property) {
    //         var sortOrder = 1;
    //         if(property[0] === "-") {
    //             sortOrder = -1;
    //             property = property.substr(1);
    //         }
    //         return function (a,b) {
    //             /* next line works with strings and numbers, 
    //              * and you may want to customize it to your needs
    //              */
    //             var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    //             return result * sortOrder;
    //         }
            
    //     }  
    //     console.log(cryptocurrencies)
    //     dynamicSort(cryptocurrencies)
    //     this.setState({
    //         cryptocurrencies: cryptocurrencies,
    //     })
    // }

    // handleNameClick = () => {
        // const cryptocurrencies = [...this.state.cryptocurrencies]
        // console.log(cryptocurrencies.name)
        // for(let i = 0; i < cryptocurrencies.length; i++){
        //     cryptocurrencies[i].name.toLowerCase().split(' ').join('')
        // }


        // let cryptoMap = cryptocurrencies.map(obj => {
        //     return obj.name.toLowerCase().split(' ').join('')
        // })

        // let cryptoForEach = cryptocurrencies.forEach(obj => {
        //     return obj.name.toLowerCase().split(' ').join('')
        // })
        // console.log(cryptoMap)
        // console.log(cryptoForEach)
        // cryptocurrencies.sort((a, b) => {

            // return (
                // a.name.toLowerCase().split(' ').join('') - b.name.toLowerCase().split(' ').join('')
            // )
            // return a.name.toUpperCase().split(',').join('').split(' ').join('').split('-').join('') - b.name.toUpperCase().split(',').join('').split(' ').join('').split('-').join('');
            // return a -b ;
            // console.log(cryptocurrencies.name)
           
           
            // return (
            //     a.map(obj => {
            //     return obj.name.toLowerCase().split(' ').join('')
            // }) - b.map(obj => {
            //     return obj.name.toLowerCase().split(' ').join('')
            // })
            // )
    //     } )
    //         console.log(cryptocurrencies)
            // this.setState({
            // cryptocurrencies: cryptocurrencies,
        // })
    // }