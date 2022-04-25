export function createCard(item){
    
    const NFTcard=document.createElement('div')
    NFTcard.className="NFT-card"
    const NFTcardtop=document.createElement('div')
    NFTcardtop.className="NFT-card-top"
    NFTcard.appendChild(NFTcardtop)
    const NFTimage=document.createElement('img')
    NFTimage.src=item.NFT_image//
    NFTimage.alt="NFT image"
    NFTcardtop.appendChild(NFTimage)
    const NFTcardtopactive=document.createElement('div')
    NFTcardtopactive.className="NFT-card-top-active"
    NFTcardtop.appendChild(NFTcardtopactive)
    const NFTimageview=document.createElement('img')
    NFTimageview.src=item.NFT_image_view
    NFTimageview.alt="NFT image view"
    NFTcardtopactive.appendChild(NFTimageview)
    const NFTcardbottom=document.createElement('div')
    NFTcardbottom.className="NFT-card-bottom"
    NFTcard.appendChild(NFTcardbottom)
    const NFTcardbottom_descriptionNFTgeneral=document.createElement('div')
    NFTcardbottom_descriptionNFTgeneral.className="NFT-card-bottom_description-NFTgeneral"
    NFTcardbottom.appendChild(NFTcardbottom_descriptionNFTgeneral)
    const title=document.createElement('p')
    title.textContent=item.title
    NFTcardbottom_descriptionNFTgeneral.appendChild(title)
    const description1 = document.createElement('p')
    description1.textContent=item.description1
    NFTcardbottom_descriptionNFTgeneral.appendChild(description1)
    const description2 = document.createElement('p')
    description2.textContent=item.description2
    NFTcardbottom_descriptionNFTgeneral.appendChild(description2)
    const NFTcardbottom_descriptionNFTespecific=document.createElement('div')
    NFTcardbottom_descriptionNFTespecific.className="NFT-card-bottom_description-NFTespecific"
    NFTcardbottom.appendChild(NFTcardbottom_descriptionNFTespecific)
    const NFT_card_bottom_description_NFTespecific_etherium=document.createElement('div')
    NFT_card_bottom_description_NFTespecific_etherium.className="NFT-card-bottom_description-NFTespecific-etherium"
    NFTcardbottom_descriptionNFTespecific.appendChild(NFT_card_bottom_description_NFTespecific_etherium)
    const ethereum_icon=document.createElement('img')
    ethereum_icon.src=item.ethereum_icon
    ethereum_icon.alt="ethereum icon"
    NFT_card_bottom_description_NFTespecific_etherium.appendChild(ethereum_icon)
    const cost=document.createElement('span')
    cost.textContent=item.cost
    NFT_card_bottom_description_NFTespecific_etherium.appendChild(cost)
    const NFT_card_bottom_description_NFTespecific_time=document.createElement('div')
    NFT_card_bottom_description_NFTespecific_time.className="NFT-card-bottom_description-NFTespecific-time"
    NFTcardbottom_descriptionNFTespecific.appendChild(NFT_card_bottom_description_NFTespecific_time)
    const clock_icon=document.createElement('img')
    clock_icon.src=item.clock_icon
    clock_icon.alt="clock icon"
    NFT_card_bottom_description_NFTespecific_time.appendChild(clock_icon)
    const time=document.createElement('span')
    time.textContent=item.time
    NFT_card_bottom_description_NFTespecific_time.appendChild(time)
    const NFT_card_bottom_description_NFTautor=document.createElement('div')
    NFT_card_bottom_description_NFTautor.className="NFT-card-bottom_description-NFTautor"
    NFTcardbottom.appendChild(NFT_card_bottom_description_NFTautor)
    const avatar_image=document.createElement('img')
    avatar_image.src=item.avatar_image
    avatar_image.alt="avatar image"
    NFT_card_bottom_description_NFTautor.appendChild(avatar_image)
    const creation=document.createElement('p')
    creation.textContent=item.creation
    NFT_card_bottom_description_NFTautor.appendChild(creation)
    const autor=document.createElement('span')
    autor.textContent=item.autor
    creation.appendChild(autor)

    return NFTcard
}