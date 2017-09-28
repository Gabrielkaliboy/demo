from PIL import Image
im = Image.open('test.png')
# 图片的格式类型、图片尺寸、
print(im.format,im.size,im.mode)

im.thumbnail((200,100))
im.save('thumb.jpg',"JPEG")