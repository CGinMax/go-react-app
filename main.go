package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/webapp/", "./webapp/")
	r.LoadHTMLGlob("webapp/*.html")
	r.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"Title": "Go-React",
			"Name":  "Cooper Gin",
		})
	})
	r.GET("/gopage", func(c *gin.Context) {
		c.HTML(http.StatusOK, "gotemplatepage.html", nil)
	})
	r.GET("/material", func(c *gin.Context) {
		c.HTML(http.StatusOK, "material.html", nil)
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
