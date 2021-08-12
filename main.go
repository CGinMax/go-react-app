package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.Static("/static/", "./static/")
	r.LoadHTMLGlob("static/*.html")
	r.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"Title": "Go-React",
			"Name": "Cooper Gin",
		})
	})
	r.GET("/jsonData", func(c *gin.Context) {
		data := map[string]interface{}{
			"lang": "Gin框架",
			"tag":  "<br>",
		}

		c.AsciiJSON(http.StatusOK, data)
	})
	r.Run(":19981") // listen and serve on 0.0.0.0:8080
}
