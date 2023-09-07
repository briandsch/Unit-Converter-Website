$(document).ready(function(){
    $('body').hide();
    $('body').fadeIn(800);
    $('.navi').css('margin-left', 1500);
    $('.navi').animate({'margin-left': '100px'}, 700);
    $('.powered').css('margin-left', '-1000px');
    $('.powered').animate({'margin-left': '250'}, 700);
    $('#presentation').hide();
    $('#presentation').fadeIn(1500);
    $('.home').css('margin-left', '-350px');
    $('.home').animate({'margin-left': '0px'}, 700);
    
                                                                                /* Distance */
                                                                                /* Kilometers */
    $('.kilometers').keyup(function(){
        var km = parseFloat($(this).val());
        $('.miles').val(Math.round((km*0.621371192)*1000000)/1000000);
        $('.meters').val(Math.round((km*1000)*1000000)/1000000);
        $('.yards').val(Math.round((km*1093.6133)*1000000)/1000000);
        if($('.kilometers').val() === ''){
            $('.miles').val('');
            $('.meters').val('');
            $('.yards').val('');
        }else if($('.miles').val() === 'NaN' || $('.meters').val() === 'NaN' || $('.yards').val() === 'NaN'){
            $('.miles').val('');
            $('.meters').val('');
            $('.yards').val('');
        }
    });
    
                                                                                /* Miles */
    $('.miles').keyup(function(){
        var ml = parseFloat($(this).val());
        $('.kilometers').val(Math.round((ml*1.609344)*1000000)/1000000);
        $('.meters').val(Math.round((ml*1609.344)*1000000)/1000000);
        $('.yards').val(Math.round((ml*1760)*1000000)/1000000);
        if($('.miles').val() === ''){
            $('.kilometers').val('');
            $('.meters').val('');
            $('.yards').val('');
        }else if($('.kilometers').val() === 'NaN' || $('.meters').val() === 'NaN' || $('.yards').val() === 'NaN'){
            $('.kilometers').val('');
            $('.meters').val('');
            $('.yards').val('');
        }
    });
                                                                                /* Meters */
    $('.meters').keyup(function(){
        var mt = parseFloat($(this).val());
        $('.kilometers').val(Math.round((mt*0.001)*1000000)/1000000);
        $('.miles').val(Math.round((mt*0.000621371192)*1000000)/1000000);
        $('.yards').val(Math.round((mt*1.0936133)*1000000)/1000000);
        if($('.meters').val() === ''){
            $('.kilometers').val('');
            $('.miles').val('');
            $('.yards').val('');
        }else if($('.kilometers').val() === 'NaN' || $('.miles').val() === 'NaN' || $('.yards').val() === 'NaN'){
            $('.kilometers').val('');
            $('.miles').val('');
            $('.yards').val('');
        }
    });
                                                                                /* Yards */
    $('.yards').keyup(function(){
        var yd = parseFloat($(this).val());
        $('.kilometers').val(Math.round((yd*0.0009144)*1000000)/1000000);
        $('.miles').val(Math.round((yd*0.000568181818)*1000000)/1000000);
        $('.meters').val(Math.round((yd*0.9144)*1000000)/1000000);
        if($('.yards').val() === ''){
            $('.kilometers').val('');
            $('.miles').val('');
            $('.meters').val('');
        }else if($('.kilometers').val() === 'NaN' || $('.miles').val() === 'NaN' || $('.meters').val() === 'NaN'){
            $('.kilometers').val('');
            $('.miles').val('');
            $('.meters').val('');
        }
    });
                                                                                /* Centimeters */
    $('.centimeters').keyup(function(){
        var cm = parseFloat($(this).val());
        $('.inches').val(Math.round((cm*0.393700787)*1000000)/1000000);
        $('.feet').val(Math.round((cm*0.032808399)*1000000)/1000000);
        
        if($('.centimeters').val() === ''){
            $('.inches').val('');
            $('.feet').val('');
            
        }else if($('.inches').val() === 'NaN' || $('.feet').val() === 'NaN'){
            $('.inches').val('');
            $('.feet').val('');
        }
    });
                                                                                /* Inches */
    $('.inches').keyup(function(){
        var iN = parseFloat($(this).val());
        $('.centimeters').val(Math.round((iN*2.54)*1000000)/1000000);
        $('.feet').val(Math.round((iN*0.0833333333)*1000000)/1000000);
        
        if($('.inches').val() === ''){
            $('.centimeters').val('');
            $('.feet').val('');
            
        }else if($('.centimeters').val() === 'NaN' || $('.feet').val() === 'NaN'){
            $('.centimeters').val('');
            $('.feet').val('');
        }
    });
                                                                                /* Feet */
    $('.feet').keyup(function(){
        var ft = parseFloat($(this).val());
        $('.centimeters').val(Math.round((ft*30.48)*1000000)/1000000);
        $('.inches').val(Math.round((ft*12)*1000000)/1000000);
        
        if($('.feet').val() === ''){
            $('.centimeters').val('');
            $('.inches').val('');
            
        }else if($('.centimeters').val() === 'NaN' || $('.inches').val() === 'NaN'){
            $('.centimeters').val('');
            $('.inches').val('');
        }
    });
                                                                                /* Square meters */
    $('.sqm').keyup(function(){
        var sqm = parseFloat($(this).val());
        $('.hectares').val(Math.round((sqm*0.0001)*1000000)/1000000);
        $('.sqf').val(Math.round((sqm*10.7639104)*1000000)/1000000);
        $('.acres').val(Math.round((sqm*0.000247105381)*1000000)/1000000);
        
        if($('.sqm').val() === ''){
            $('.hectares').val('');
            $('.sqf').val('');
            $('.acres').val('');
            
        }else if($('.hectares').val() === 'NaN' || $('.sqf').val() === 'NaN' || $('.acres').val() === 'NaN'){
            $('.hectares').val('');
            $('.sqf').val('');
            $('.acres').val('');
        }
    });
                                                                                /* Square feet */
    $('.sqf').keyup(function(){
        var hc = parseFloat($(this).val());
        $('.sqm').val(Math.round((hc*0.0929)*1000000)/1000000);
        $('.hectares').val(Math.round((hc*0.00000929)*1000000)/1000000);
        $('.acres').val(Math.round((hc*0.000022957)*1000000)/1000000);
        
        if($('.hectares').val() === ''){
            $('.sqm').val('');
            $('.sqf').val('');
            $('.acres').val('');
            
        }else if($('.sqm').val() === 'NaN' || $('.hectares').val() === 'NaN' || $('.acres').val() === 'NaN'){
            $('.sqm').val('');
            $('.hectares').val('');
            $('.acres').val('');
        }
    });
                                                                                /* Hectares */
    $('.hectares').keyup(function(){
        var hc = parseFloat($(this).val());
        $('.sqm').val(Math.round((hc*10000)*1000000)/1000000);
        $('.sqf').val(Math.round((hc*107639.1)*1000000)/1000000);
        $('.acres').val(Math.round((hc*2.471)*1000000)/1000000);
        
        if($('.hectares').val() === ''){
            $('.sqm').val('');
            $('.sqf').val('');
            $('.acres').val('');
            
        }else if($('.sqm').val() === 'NaN' || $('.sqf').val() === 'NaN' || $('.acres').val() === 'NaN'){
            $('.sqm').val('');
            $('.sqf').val('');
            $('.acres').val('');
        }
    });
                                                                                /* Acres */
    $('.acres').keyup(function(){
        var hc = parseFloat($(this).val());
        $('.sqm').val(Math.round((hc*4046.854)*1000000)/1000000);
        $('.sqf').val(Math.round((hc*43559.977)*1000000)/1000000);
        $('.hectares').val(Math.round((hc*0.4047)*1000000)/1000000);
        
        if($('.acres').val() === ''){
            $('.sqm').val('');
            $('.sqf').val('');
            $('.hectares').val('');
            
        }else if($('.sqm').val() === 'NaN' || $('.sqf').val() === 'NaN' || $('.hectares').val() === 'NaN'){
            $('.sqm').val('');
            $('.sqf').val('');
            $('.hectares').val('');
        }
    });
                                                                                /* Cubic meters */
    $('.m3').keyup(function(){
        var m3 = parseFloat($(this).val());
        $('.liters').val(Math.round((m3*1000)*1000000)/1000000);
        $('.gallons').val(Math.round((m3*219.969)*1000000)/1000000);
        $('.gallons2').val(Math.round((m3*264.172)*1000000)/1000000);
        
        if($('.m3').val() === ''){
            $('.liters').val('');
            $('.gallons').val('');
            $('.gallons2').val('');
            
        }else if($('.liters').val() === 'NaN' || $('.gallons').val() === 'NaN' || $('.gallons2').val() === 'NaN'){
            $('.liters').val('');
            $('.gallons').val('');
            $('.gallons2').val('');
        }
    });
                                                                                /* Liters */
    $('.liters').keyup(function(){
        var m3 = parseFloat($(this).val());
        $('.m3').val(Math.round((m3*0.001)*1000000)/1000000);
        $('.gallons').val(Math.round((m3*0.22)*1000000)/1000000);
        $('.gallons2').val(Math.round((m3*0.2642)*1000000)/1000000);
        if($('.liters').val() === ''){
            $('.m3').val('');
            $('.gallons').val('');
            $('.gallons2').val('');
            
        }else if($('.m3').val() === 'NaN' || $('.gallons').val() === 'NaN' || $('.gallons2').val() === 'NaN'){
            $('.m3').val('');
            $('.gallons').val('');
            $('.gallons2').val('');
        }
    });
                                                                                /* Gallons (UK) */
    $('.gallons').keyup(function(){
        var m3 = parseFloat($(this).val());
        $('.m3').val(Math.round((m3*0.0045)*1000000)/1000000);
        $('.liters').val(Math.round((m3*4.5461)*1000000)/1000000);
        $('.gallons2').val(Math.round((m3*1.201)*1000000)/1000000);
        
        if($('.gallons').val() === ''){
            $('.m3').val('');
            $('.liters').val('');
            $('.gallons2').val('');
            
        }else if($('.m3').val() === 'NaN' || $('.liters').val() === 'NaN' || $('.gallons2').val() === 'NaN'){
            $('.m3').val('');
            $('.liters').val('');
            $('.gallons2').val('');
        }
    });
                                                                                /* Gallons (US) */
    $('.gallons2').keyup(function(){
        var m3 = parseFloat($(this).val());
        $('.m3').val(Math.round((m3*0.0038)*1000000)/1000000);
        $('.liters').val(Math.round((m3*3.7854)*1000000)/1000000);
        $('.gallons').val(Math.round((m3*0.8327)*1000000)/1000000);
        
        if($('.gallons2').val() === ''){
            $('.m3').val('');
            $('.liters').val('');
            $('.gallons').val('');
            
        }else if($('.m3').val() === 'NaN' || $('.liters').val() === 'NaN' || $('.gallons').val() === 'NaN'){
            $('.m3').val('');
            $('.liters').val('');
            $('.gallons').val('');
        }
    });
                                                                                /* km/h */
    $('.kmh').keyup(function(){
        var kmh = parseFloat($(this).val());
        $('.mph').val(Math.round((kmh*0.6214)*1000000)/1000000);
        $('.ms').val(Math.round((kmh*0.2778)*1000000)/1000000);
        $('.fts').val(Math.round((kmh*0.9113)*1000000)/1000000);
        
        if($('.kmh').val() === ''){
            $('.mph').val('');
            $('.ms').val('');
            $('.fts').val('');
            
        }else if($('.mph').val() === 'NaN' || $('.ms').val() === 'NaN' || $('.fts').val() === 'NaN'){
            $('.mph').val('');
            $('.ms').val('');
            $('.fts').val('');
        }
    });
                                                                                /* mph */
    $('.mph').keyup(function(){
        var kmh = parseFloat($(this).val());
        $('.kmh').val(Math.round((kmh*1.6093)*1000000)/1000000);
        $('.ms').val(Math.round((kmh*0.447)*1000000)/1000000);
        $('.fts').val(Math.round((kmh*1.4667)*1000000)/1000000);
        
        if($('.mph').val() === ''){
            $('.kmh').val('');
            $('.ms').val('');
            $('.fts').val('');
            
        }else if($('.kmh').val() === 'NaN' || $('.ms').val() === 'NaN' || $('.fts').val() === 'NaN'){
            $('.kmh').val('');
            $('.ms').val('');
            $('.fts').val('');
        }
    });
                                                                                /* m/s */
    $('.ms').keyup(function(){
        var kmh = parseFloat($(this).val());
        $('.kmh').val(Math.round((kmh*3.6)*1000000)/1000000);
        $('.mph').val(Math.round((kmh*2.2369)*1000000)/1000000);
        $('.fts').val(Math.round((kmh*3.2808)*1000000)/1000000);
        
        if($('.ms').val() === ''){
            $('.kmh').val('');
            $('.mph').val('');
            $('.fts').val('');
            
        }else if($('.kmh').val() === 'NaN' || $('.mph').val() === 'NaN' || $('.fts').val() === 'NaN'){
            $('.kmh').val('');
            $('.mph').val('');
            $('.fts').val('');
        }
    });
                                                                                /* ft/s */
    $('.fts').keyup(function(){
        var kmh = parseFloat($(this).val());
        $('.kmh').val(Math.round((kmh*1.097)*1000000)/1000000);
        $('.mph').val(Math.round((kmh*0.6818)*1000000)/1000000);
        $('.ms').val(Math.round((kmh*0.3048)*1000000)/1000000);
        
        if($('.fts').val() === ''){
            $('.kmh').val('');
            $('.mph').val('');
            $('.ms').val('');
            
        }else if($('.kmh').val() === 'NaN' || $('.mph').val() === 'NaN' || $('.ms').val() === 'NaN'){
            $('.kmh').val('');
            $('.mph').val('');
            $('.ms').val('');
        }
    });
                                                                                /* Grams */
    $('.grams').keyup(function(){
        var gr = parseFloat($(this).val());
        $('.ounces').val(Math.round((gr*0.0353)*1000000)/1000000);
        $('.kilograms').val(Math.round((gr*0.001)*1000000)/1000000);
        $('.pounds').val(Math.round((gr*0.0022)*1000000)/1000000);
        
        if($('.grams').val() === ''){
            $('.ounces').val('');
            $('.kilograms').val('');
            $('.pounds').val('');
            
        }else if($('.ounces').val() === 'NaN' || $('.kilograms').val() === 'NaN' || $('.pounds').val() === 'NaN'){
            $('.ounces').val('');
            $('.kilograms').val('');
            $('.pounds').val('');
        }
    });
                                                                                /* Ounces */
    $('.ounces').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.grams').val(Math.round((oz*28.3495)*1000000)/1000000);
        $('.kilograms').val(Math.round((oz*0.0283)*1000000)/1000000);
        $('.pounds').val(Math.round((oz*0.0625)*1000000)/1000000);
        
        if($('.ounces').val() === ''){
            $('.grams').val('');
            $('.kilograms').val('');
            $('.pounds').val('');
            
        }else if($('.grams').val() === 'NaN' || $('.kilograms').val() === 'NaN' || $('.pounds').val() === 'NaN'){
            $('.grams').val('');
            $('.kilograms').val('');
            $('.pounds').val('');
        }
    });
                                                                                /* Kilograms */
    $('.kilograms').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.grams').val(Math.round((oz*1000)*1000000)/1000000);
        $('.ounces').val(Math.round((oz*35.2739)*1000000)/1000000);
        $('.pounds').val(Math.round((oz*2.2046)*1000000)/1000000);
        
        if($('.kilograms').val() === ''){
            $('.grams').val('');
            $('.ounces').val('');
            $('.pounds').val('');
            
        }else if($('.grams').val() === 'NaN' || $('.ounces').val() === 'NaN' || $('.pounds').val() === 'NaN'){
            $('.grams').val('');
            $('.ounces').val('');
            $('.pounds').val('');
        }
    });
                                                                                /* Pounds */
    $('.pounds').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.grams').val(Math.round((oz*453.5927)*1000000)/1000000);
        $('.ounces').val(Math.round((oz*16)*1000000)/1000000);
        $('.kilograms').val(Math.round((oz*0.4536)*1000000)/1000000);
        
        if($('.pounds').val() === ''){
            $('.grams').val('');
            $('.ounces').val('');
            $('.kilograms').val('');
            
        }else if($('.grams').val() === 'NaN' || $('.ounces').val() === 'NaN' || $('.kilograms').val() === 'NaN'){
            $('.grams').val('');
            $('.ounces').val('');
            $('.kilograms').val('');
        }
    });
                                                                                /* Newtons */
    $('.newtons').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.dynes').val(Math.round((oz*100000)*1000000)/1000000);
        $('.kgf').val(Math.round((oz*0.102)*1000000)/1000000);
        $('.pndf').val(Math.round((oz*0.2248)*1000000)/1000000);
        
        if($('.newtons').val() === ''){
            $('.dynes').val('');
            $('.kgf').val('');
            $('.pndf').val('');
            
        }else if($('.dynes').val() === 'NaN' || $('.kgf').val() === 'NaN' || $('.pndf').val() === 'NaN'){
            $('.dynes').val('');
            $('.kgf').val('');
            $('.pndf').val('');
        }
    });
                                                                                /* Dynes */
    $('.dynes').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.newtons').val(Math.round((oz*0.00001)*1000000)/1000000);
        $('.kgf').val(Math.round((oz*0.0000010197)*1000000)/1000000);
        $('.pndf').val(Math.round((oz*0.0000022481)*1000000)/1000000);
        
        if($('.dynes').val() === ''){
            $('.newtons').val('');
            $('.kgf').val('');
            $('.pndf').val('');
            
        }else if($('.newtons').val() === 'NaN' || $('.kgf').val() === 'NaN' || $('.pndf').val() === 'NaN'){
            $('.newtons').val('');
            $('.kgf').val('');
            $('.pndf').val('');
        }
    });
                                                                                /* Kilogram-force */
    $('.kgf').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.newtons').val(Math.round((oz*9.8067)*1000000)/1000000);
        $('.dynes').val(Math.round((oz*980665)*1000000)/1000000);
        $('.pndf').val(Math.round((oz*2.2046)*1000000)/1000000);
        
        if($('.kgf').val() === ''){
            $('.newtons').val('');
            $('.dynes').val('');
            $('.pndf').val('');
            
        }else if($('.newtons').val() === 'NaN' || $('.dynes').val() === 'NaN' || $('.pndf').val() === 'NaN'){
            $('.newtons').val('');
            $('.dynes').val('');
            $('.pndf').val('');
        }
    });
                                                                                /* Pound-force */
    $('.pndf').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.newtons').val(Math.round((oz*4.4482)*1000000)/1000000);
        $('.dynes').val(Math.round((oz*444822.1615)*1000000)/1000000);
        $('.kgf').val(Math.round((oz*0.4536)*1000000)/1000000);
        
        if($('.pndf').val() === ''){
            $('.newtons').val('');
            $('.dynes').val('');
            $('.kgf').val('');
            
        }else if($('.newtons').val() === 'NaN' || $('.dynes').val() === 'NaN' || $('.kgf').val() === 'NaN'){
            $('.newtons').val('');
            $('.dynes').val('');
            $('.kgf').val('');
        }
    });
                                                                                /* Atmospheres */
    $('.atms').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.pascals').val(Math.round((oz*101325)*1000000)/1000000);
        $('.milibars').val(Math.round((oz*1013.25)*1000000)/1000000);
        $('.kgfc2').val(Math.round((oz*1.0332)*1000000)/1000000);
        $('.psi').val(Math.round((oz*14.6959)*1000000)/1000000);
        $('.mercury').val(Math.round((oz*760.0021)*1000000)/1000000);
        
        if($('.atms').val() === ''){
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
            
        }else if($('.pascals').val() === 'NaN' || $('.milibars').val() === 'NaN' || $('.kgfc2').val() === 'NaN' || $('.psi').val() === 'NaN' || $('.mercury').val() === 'NaN'){
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
        }
    });
                                                                                /* Pascals */
    $('.pascals').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.atms').val(Math.round((oz*0.0000098692)*1000000)/1000000);
        $('.milibars').val(Math.round((oz*0.01)*1000000)/1000000);
        $('.kgfc2').val(Math.round((oz*0.000010197)*1000000)/1000000);
        $('.psi').val(Math.round((oz*0.0001)*1000000)/1000000);
        $('.mercury').val(Math.round((oz*0.0075)*1000000)/1000000);
        
        if($('.pascals').val() === ''){
            $('.atms').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
            
        }else if($('.atms').val() === 'NaN' || $('.milibars').val() === 'NaN' || $('.kgfc2').val() === 'NaN' || $('.psi').val() === 'NaN' || $('.mercury').val() === 'NaN'){
            $('.atms').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
        }
    });
                                                                                /* Milibars */
    $('.milibars').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.atms').val(Math.round((oz*0.001)*1000000)/1000000);
        $('.pascals').val(Math.round((oz*100)*1000000)/1000000);
        $('.kgfc2').val(Math.round((oz*0.001)*1000000)/1000000);
        $('.psi').val(Math.round((oz*0.0145)*1000000)/1000000);
        $('.mercury').val(Math.round((oz*0.7501)*1000000)/1000000);
        
        if($('.milibars').val() === ''){
            $('.atms').val('');
            $('.pascals').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
            
        }else if($('.atms').val() === 'NaN' || $('.pascals').val() === 'NaN' || $('.kgfc2').val() === 'NaN' || $('.psi').val() === 'NaN' || $('.mercury').val() === 'NaN'){
            $('.atms').val('');
            $('.pascals').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            $('.mercury').val('');
        }
    });
                                                                                /* kg/cm2 */
    $('.kgfc2').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.atms').val(Math.round((oz*0.9678)*1000000)/1000000);
        $('.pascals').val(Math.round((oz*98066.5205)*1000000)/1000000);
        $('.milibars').val(Math.round((oz*980.6652)*1000000)/1000000);
        $('.psi').val(Math.round((oz*14.2233)*1000000)/1000000);
        $('.mercury').val(Math.round((oz*735.5615)*1000000)/1000000);
        
        if($('.kgfc2').val() === ''){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.psi').val('');
            $('.mercury').val('');
            
        }else if($('.atms').val() === 'NaN' || $('.pascals').val() === 'NaN' || $('.milibars').val() === 'NaN' || $('.psi').val() === 'NaN' || $('.mercury').val() === 'NaN'){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.psi').val('');
            $('.mercury').val('');
        }
    });
                                                                                /* PSI */
    $('.psi').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.atms').val(Math.round((oz*0.068)*1000000)/1000000);
        $('.pascals').val(Math.round((oz*6894.7591)*1000000)/1000000);
        $('.milibars').val(Math.round((oz*68.9476)*1000000)/1000000);
        $('.kgfc2').val(Math.round((oz*0.0703)*1000000)/1000000);
        $('.mercury').val(Math.round((oz*51.7151)*1000000)/1000000);
        
        if($('.psi').val() === ''){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.mercury').val('');
            
        }else if($('.atms').val() === 'NaN' || $('.pascals').val() === 'NaN' || $('.milibars').val() === 'NaN' || $('.kgfc2').val() === 'NaN' || $('.mercury').val() === 'NaN'){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.mercury').val('');
        }
    });
                                                                                /* mm of Mercury */
    $('.mercury').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.atms').val(Math.round((oz*0.0013)*1000000)/1000000);
        $('.pascals').val(Math.round((oz*133.322)*1000000)/1000000);
        $('.milibars').val(Math.round((oz*1.3332)*1000000)/1000000);
        $('.kgfc2').val(Math.round((oz*0.0014)*1000000)/1000000);
        $('.psi').val(Math.round((oz*0.0193)*1000000)/1000000);
        
        if($('.mercury').val() === ''){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
            
        }else if($('.atms').val() === 'NaN' || $('.pascals').val() === 'NaN' || $('.milibars').val() === 'NaN' || $('.kgfc2').val() === 'NaN' || $('.psi').val() === 'NaN'){
            $('.atms').val('');
            $('.pascals').val('');
            $('.milibars').val('');
            $('.kgfc2').val('');
            $('.psi').val('');
        }
    });
                                                                                /* Celsius */
    $('.celsius').keyup(function(){
        var cm = parseFloat($(this).val());
        $('.fahrenheit').val(Math.round((cm*(9/5)+32)*1000000)/1000000);
        $('.kelvin').val(Math.round((cm+273.15)*1000000)/1000000);
        
        if($('.celsius').val() === ''){
            $('.fahrenheit').val('');
            $('.kelvin').val('');
            
        }else if($('.fahrenheit').val() === 'NaN' || $('.kelvin').val() === 'NaN'){
            $('.fahrenheit').val('');
            $('.kelvin').val('');
        }
    });
                                                                                /* Kelvin */
    $('.kelvin').keyup(function(){
        var cm = parseFloat($(this).val());
        $('.fahrenheit').val(Math.round(((cm-273.15)*(9/5)+32)*1000000)/1000000);
        $('.celsius').val(Math.round((cm-273.15)*1000000)/1000000);
        
        if($('.kelvin').val() === ''){
            $('.fahrenheit').val('');
            $('.celsius').val('');
            
        }else if($('.fahrenheit').val() === 'NaN' || $('.celsius').val() === 'NaN'){
            $('.fahrenheit').val('');
            $('.celsius').val('');
        }
    });
                                                                                /* Fahrenheit */
    $('.fahrenheit').keyup(function(){
        var cm = parseFloat($(this).val());
        $('.celsius').val(Math.round(((cm-32)*(5/9))*1000000)/1000000);
        $('.kelvin').val(Math.round(((cm-32)*(5/9)+273.15)*1000000)/1000000);
        
        if($('.fahrenheit').val() === ''){
            $('.kelvin').val('');
            $('.celsius').val('');
            
        }else if($('.kelvin').val() === 'NaN' || $('.celsius').val() === 'NaN'){
            $('.kelvin').val('');
            $('.celsius').val('');
        }
    });
                                                                                /* Seconds */
    $('.seconds').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.minutes').val(Math.round((oz*0.0167)*1000000)/1000000);
        $('.hours').val(Math.round((oz*0.0003)*1000000)/1000000);
        $('.days').val(Math.round((oz*0.000011574)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*0.0000016534)*1000000)/1000000);
        $('.months').val(Math.round((oz*0.00000038026)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.000000031688)*1000000)/1000000);
        
        if($('.seconds').val() === ''){
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
            
        }else if($('.months').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.days').val() === 'NaN' || $('.weeks').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
        }
    });
                                                                                /* Minutes */
    $('.minutes').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*60)*1000000)/1000000);
        $('.hours').val(Math.round((oz*0.0167)*1000000)/1000000);
        $('.days').val(Math.round((oz*0.0007)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*0.0001)*1000000)/1000000);
        $('.months').val(Math.round((oz*0.000022815)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.0000019013)*1000000)/1000000);
        
        if($('.minutes').val() === ''){
            $('.seconds').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
            
        }else if($('.months').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.days').val() === 'NaN' || $('.weeks').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.seconds').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
        }
    });
                                                                                /* Hours */
    $('.hours').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*3600)*1000000)/1000000);
        $('.minutes').val(Math.round((oz*60)*1000000)/1000000);
        $('.days').val(Math.round((oz*0.0417)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*0.006)*1000000)/1000000);
        $('.months').val(Math.round((oz*0.0014)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.0001)*1000000)/1000000);
        
        if($('.hours').val() === ''){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
            
        }else if($('.months').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.days').val() === 'NaN' || $('.weeks').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
        }
    });
                                                                                /* Days */
    $('.days').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*86400)*1000000)/1000000);
        $('.minutes').val(Math.round((oz*1440)*1000000)/1000000);
        $('.hours').val(Math.round((oz*24)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*0.1429)*1000000)/1000000);
        $('.months').val(Math.round((oz*0.0329)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.0027)*1000000)/1000000);
        
        if($('.days').val() === ''){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
            
        }else if($('.months').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.weeks').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.weeks').val('');
            $('.months').val('');
            $('.years').val('');
        }
    });
                                                                                /* Weeks */
    $('.weeks').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*604800.0166)*1000000)/1000000);
        $('.minutes').val(Math.round((oz*10080.0003)*1000000)/1000000);
        $('.hours').val(Math.round((oz*168)*1000000)/1000000);
        $('.days').val(Math.round((oz*7)*1000000)/1000000);
        $('.months').val(Math.round((oz*0.23)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.0192)*1000000)/1000000);
        
        if($('.weeks').val() === ''){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.months').val('');
            $('.years').val('');
            
        }else if($('.months').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.days').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.months').val('');
            $('.years').val('');
        }
    });
                                                                                /* Months */
    $('.months').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*2629800)*1000000)/1000000);
        $('.minutes').val(Math.round((oz*43830)*1000000)/1000000);
        $('.hours').val(Math.round((oz*730.5)*1000000)/1000000);
        $('.days').val(Math.round((oz*30.4375)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*4.3482)*1000000)/1000000);
        $('.years').val(Math.round((oz*0.0833)*1000000)/1000000);
        
        if($('.months').val() === ''){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.years').val('');
            
        }else if($('.weeks').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.days').val() === 'NaN' || $('.years').val() === 'NaN'){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.years').val('');
        }
    });
                                                                                /* Years */
    $('.years').keyup(function(){
        var oz = parseFloat($(this).val());
        $('.seconds').val(Math.round((oz*31557600)*1000000)/1000000);
        $('.minutes').val(Math.round((oz*525960)*1000000)/1000000);
        $('.hours').val(Math.round((oz*8766)*1000000)/1000000);
        $('.days').val(Math.round((oz*365.25)*1000000)/1000000);
        $('.weeks').val(Math.round((oz*52.1786)*1000000)/1000000);
        $('.months').val(Math.round((oz*12)*1000000)/1000000);
        
        if($('.years').val() === ''){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
            
        }else if($('.weeks').val() === 'NaN' || $('.seconds').val() === 'NaN' || $('.minutes').val() === 'NaN' || $('.hours').val() === 'NaN' || $('.days').val() === 'NaN' || $('.months').val() === 'NaN'){
            $('.seconds').val('');
            $('.minutes').val('');
            $('.hours').val('');
            $('.days').val('');
            $('.weeks').val('');
            $('.months').val('');
        }
    });
});

