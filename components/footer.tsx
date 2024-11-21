import React from 'react'
import { Button } from './ui/button'
import { Github, Gitlab, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t py-6 px-2 md:py-0 text-md">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 justify-between w-full">
            <p className="text-center text-sm leading-loose text-muted-foreground ">
              <a
                href="https://laclass.dev"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Laclass Dev
              </a>
            </p>
            <div className="flex gap-2">
            <Button variant="outline" asChild>
              <a href="https://github.com/bellandry" target="_blank" rel="noopener noreferrer">
                <Github className=" h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://gitlab.com/bellandry.work" target="_blank" rel="noopener noreferrer">
                <Gitlab className=" h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/bellandry" target="_blank" rel="noopener noreferrer">
                <Linkedin className=" h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:contact@laclass.dev">
                <Mail className=" h-4 w-4" />
              </a>
            </Button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer