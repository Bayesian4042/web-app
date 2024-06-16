1. Nestjs is single threaded which uses upto single core.
2. how to breakup large task that requires tons of processing power beyond single core.
3. solution is distributed async processing that happens over multiple instances of an application that are scaled out horizontally.
4. To achieve this, need message broker that can coordinate messages on a queue like system. We can procces messages in paralle, scale out and even reprocess messages if they die halfway through. This is a powerful pattern to scale out in node.js. 