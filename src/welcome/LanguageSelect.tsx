import { PolandFlag, UsaFlag, CzechFlag, DenmarkFlag, NetherlandsFlag, FranceFlag, GermanyFlag, IcelandFlag, ItalyFlag, JapanFlag, LithuaniaFlag, PortugalFlag, SloveniaFlag, SpainFlag, IkeaFlag, UkraineFlag, BangladeshFlag, IndiaFlag } from './Flags'
import "./languageselect.css"
import React from 'react'

// Source: https://github.com/madebyair/airos/blob/main/src/Setup/Welcome.jsx

interface LanguageSelectProps {
    sumbit: (lang: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ sumbit }) => {
    return (
          <div className="languageselect">
              <div className="content">
                  <div className="header">
                      <h1>Language</h1>
                  </div>
                  <div className="languages">
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <UsaFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>English - English</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <CzechFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Česky - Czech</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <DenmarkFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Dansk - Danish</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <NetherlandsFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Nederlands - Dutch</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <FranceFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Français - French</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <GermanyFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Deutsch - German</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <IcelandFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Íslenskur - Icelandic</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <ItalyFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Italiano - Italian</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <JapanFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>日本語 - Japanese</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <LithuaniaFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Lietuvių - Lithuanian</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('pl')}>
                          <div className="box">
                              <div className="container">
                                  <PolandFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Polski - Polish</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <PortugalFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Português - Portuguese</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <SloveniaFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Slovenski - Slovenian</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <SpainFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Spanglish - Spanish</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <IkeaFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Svenska - Swedish</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <UkraineFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>Українська - Ukrainian</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <IndiaFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>हिन्दी - Hindi</span>
                          </div>
                      </div>
                      <div className="language" onClick={() => sumbit('en')}>
                          <div className="box">
                              <div className="container">
                                  <BangladeshFlag />
                              </div>
                          </div>
                          <div className="text">
                              <span>বাংলা - Bengali</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    )
  }

export default LanguageSelect